import { useEffect, useRef } from 'react';

/**
 * Raymarched 3D quaternion Julia set  (q -> q^2 + c)
 * Rendered live in WebGL. Supports dark and light mode via u_isDark uniform.
 */
const JuliaBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) return;

    const vs = `
      attribute vec2 p;
      void main(){ gl_Position = vec4(p, 0.0, 1.0); }
    `;

    const fs = `
      precision highp float;
      uniform vec2 u_res;
      uniform float u_time;
      uniform int u_isDark;

      vec4 qsqr(vec4 a){
        return vec4(a.x*a.x - a.y*a.y - a.z*a.z - a.w*a.w,
                    2.0*a.x*a.y, 2.0*a.x*a.z, 2.0*a.x*a.w);
      }

      float mapJ(vec3 pos, vec4 c, out float trap){
        vec4 z = vec4(pos, 0.0);
        float dz2 = 1.0;
        float m2 = dot(z,z);
        trap = 1e10;
        for(int i=0;i<9;i++){
          dz2 *= 4.0*dot(z,z);
          z = qsqr(z) + c;
          m2 = dot(z,z);
          trap = min(trap, m2);
          if(m2>6.0) break;
        }
        return 0.25*log(m2)*sqrt(m2/dz2);
      }

      vec3 nrm(vec3 p, vec4 c){
        float t;
        vec2 e = vec2(0.0018, 0.0);
        return normalize(vec3(
          mapJ(p+e.xyy,c,t)-mapJ(p-e.xyy,c,t),
          mapJ(p+e.yxy,c,t)-mapJ(p-e.yxy,c,t),
          mapJ(p+e.yyx,c,t)-mapJ(p-e.yyx,c,t)));
      }

      void main(){
        vec2 uv = (2.0*gl_FragCoord.xy - u_res)/u_res.y;
        float t = u_time*0.13;

        vec4 c = vec4(-0.291, -0.399, 0.339, 0.437)
                 + 0.055*vec4(cos(t*0.7), sin(t*0.53), cos(t*0.41), sin(t*0.31));

        float ca = u_time*0.06;
        vec3 ro = vec3(2.7*cos(ca), 0.65, 2.7*sin(ca));
        vec3 ww = normalize(-ro);
        vec3 uu = normalize(cross(ww, vec3(0.0,1.0,0.0)));
        vec3 vv = cross(uu, ww);
        vec3 rd = normalize(uv.x*uu + uv.y*vv + 1.6*ww);

        float tt = 1.0;
        float trap = 0.0;
        bool hit = false;
        for(int i=0;i<100;i++){
          vec3 p = ro + rd*tt;
          float tr;
          float d = mapJ(p, c, tr);
          if(d < 0.0016){ hit = true; trap = tr; break; }
          tt += d;
          if(tt > 7.0) break;
        }

        vec3 col;
        if(u_isDark == 1){
          col = vec3(0.012, 0.022, 0.045);
        } else {
          col = vec3(0.930, 0.945, 0.980);
        }

        if(hit){
          vec3 hp = ro + rd*tt;
          vec3 n = nrm(hp, c);
          vec3 lig = normalize(vec3(0.7, 0.85, 0.35));
          float dif = clamp(dot(n, lig), 0.0, 1.0);
          float amb = 0.42 + 0.58*clamp(n.y, 0.0, 1.0);
          float m = sqrt(clamp(trap, 0.0, 1.0));

          if(u_isDark == 1){
            // Cyan-teal surface on dark navy background
            vec3 base = mix(vec3(0.02,0.20,0.40), vec3(0.10,0.78,0.95), clamp(m*1.5, 0.0, 1.0));
            base = mix(base, vec3(0.50,0.66,1.0), clamp(m*m*1.6, 0.0, 1.0));
            col = base*(amb*0.5 + dif*0.95);
            col += vec3(0.12,0.45,0.65)*pow(dif, 10.0)*0.7;
            col *= exp(-0.16*tt);
            col += base*0.06;
          } else {
            // Deep navy-indigo surface on pale blue-white background
            vec3 base = mix(vec3(0.04,0.09,0.28), vec3(0.10,0.24,0.55), clamp(m*1.5, 0.0, 1.0));
            base = mix(base, vec3(0.25,0.45,0.75), clamp(m*m*1.6, 0.0, 1.0));
            col = base*(amb*0.5 + dif*0.95);
            col += vec3(0.10,0.25,0.60)*pow(dif, 10.0)*0.5;
            col *= exp(-0.12*tt);
            col += base*0.04;
          }
        }
        col = pow(col, vec3(0.85));
        gl_FragColor = vec4(col, 1.0);
      }
    `;

    const compile = (type, src) => {
      const s = gl.createShader(type);
      gl.shaderSource(s, src);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(s));
      }
      return s;
    };

    const prog = gl.createProgram();
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, vs));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, fs));
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, 'p');
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const uRes    = gl.getUniformLocation(prog, 'u_res');
    const uTime   = gl.getUniformLocation(prog, 'u_time');
    const uIsDark = gl.getUniformLocation(prog, 'u_isDark');

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.25);
      const w = Math.floor(canvas.clientWidth * dpr);
      const h = Math.floor(canvas.clientHeight * dpr);
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
      }
    };
    window.addEventListener('resize', resize);

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let raf = 0;
    let running = true;
    const start = performance.now();

    const draw = (time) => {
      resize();
      const isDark = document.documentElement.dataset.theme === 'dark';
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uTime, time);
      gl.uniform1i(uIsDark, isDark ? 1 : 0);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };

    const loop = () => {
      if (!running) return;
      draw((performance.now() - start) / 1000);
      raf = requestAnimationFrame(loop);
    };

    let observer = null;
    if ('IntersectionObserver' in window && !reduceMotion) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !running) {
            running = true;
            loop();
          } else if (!entry.isIntersecting && running) {
            running = false;
            cancelAnimationFrame(raf);
          }
        },
        { threshold: 0 }
      );
      observer.observe(canvas);
    }

    if (reduceMotion) {
      running = false;
      draw(6.0);
    } else {
      loop();
    }

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        display: 'block',
        zIndex: 0
      }}
    />
  );
};

export default JuliaBackground;
