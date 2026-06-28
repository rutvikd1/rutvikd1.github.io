import React from 'react';
import ProjectLayout from '../../components/ProjectLayout';
import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

// Importing actual report images extracted from PDF
import figConstellation from '../../assets/report_img-007.png';
import figRtkSetup from '../../assets/report_img-008.png';
import figPiConnections from '../../assets/report_img-009.png';
import figMeasurements from '../../assets/report_img-018.png';
import figNoiseOverTime from '../../assets/report_img-019.png';
import figSkyplotRnmp from '../../assets/report_img-020.png';
import figSkyplotCno from '../../assets/report_img-021.png';
import figPolesModel from '../../assets/report_img-022.png';
// import coverImage from '../../assets/report_img-003.png';

export const GNSSMultipathAnalysisContent = () => {
  return (
    <>
      {/* 1. Abstract */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>Abstract</h2>
        <div
          className="p-6 rounded-xl border-l-4 leading-relaxed"
          style={{
            backgroundColor: 'var(--surface-alt)',
            borderColor: 'var(--hero-primary-bg)',
            color: 'var(--text-primary)'
          }}
        >
          GNSS receivers are vital for localization and navigation of drones and autonomous ground vehicles, providing high-precision global position fixes. This report presents a systematic error analysis for GPS data collected over a continuous 24-hour period at the Virginia Tech drone park. By combining carrier-phase differential measurements, we isolate and quantify the local multipath errors, demonstrating that the surrounding physical support columns are the primary contributors to ranging errors.
        </div>
      </section>

      {/* 2. Introduction & Theory */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>Introduction & DGPS Theory</h2>
        <p>
          Global Navigation Satellite Systems (GNSS) utilize a constellation of satellites transmitting signal streams (providing ranging, timing, and ephemeris data). A standalone receiver requires a line-of-sight signal from at least 4 satellites to resolve its 3D position and correct clock bias. However, traveling over 20,000 km exposes GNSS signals to atmospheric delays:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
          <li><strong>Ionospheric Errors:</strong> Dispersion and delays caused by free electrons in the upper atmosphere.</li>
          <li><strong>Tropospheric Errors:</strong> Delays resulting from temperature, pressure, and water vapor in the lower atmosphere.</li>
        </ul>
        <p>
          To mitigate these local atmospheric delays, <strong>Differential GPS (DGPS)</strong> employs a secondary base receiver at a known reference point. By differencing code phase measurements between the base station and the rover receiver, common local errors are cancelled.
        </p>

        {/* Figure 1: Constellation Representation */}
        <div className="my-8 text-center bg-gray-900/5 dark:bg-white/5 p-4 rounded-xl border border-gray-200/50 dark:border-gray-800/50">
          <img src={figConstellation} alt="GNSS Constellation representation" className="rounded-lg mx-auto max-h-[300px]" />
          <p className="text-xs mt-2" style={{ color: 'var(--text-secondary)' }}>
            Figure 1: GNSS constellation representation (from Page 4 of the report).
          </p>
        </div>
      </section>

      {/* 3. RTK GPS & Carrier Phase */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>Real-Time Kinematic (RTK) Working Principles</h2>
        <p>
          While standard DGPS relies on code-phase pseudoranges, <strong>Real-Time Kinematic (RTK)</strong> GPS processes the high-frequency carrier-phase signals. The wavelength of the GPS carrier signal (around 19 cm for L1) is much shorter than the code bits (around 300 meters), enabling millimeter-level precision.
        </p>
        <p>
          A critical phase of RTK is resolving the <strong>Cycle Ambiguity</strong>—the exact integer number of cycles between the satellite and the receiver antenna. The RTK base station surveys its position and broadcasts correction data in real-time (often using the RTCM protocol via telemetry or NTRIP internet streams) to the rover module, achieving a centimeter-level accuracy fix once the integer ambiguity is locked.
        </p>

        {/* Figure 2: Typical Setup Block Diagram */}
        <div className="my-8 text-center bg-gray-900/5 dark:bg-white/5 p-4 rounded-xl border border-gray-200/50 dark:border-gray-800/50">
          <img src={figRtkSetup} alt="Block Diagram of typical RTK GPS setup and working" className="rounded-xl mx-auto max-h-[340px]" />
          <p className="text-xs mt-2" style={{ color: 'var(--text-secondary)' }}>
            Figure 2: Block Diagram of typical RTK GPS setup and working (from Page 5 of the report).
          </p>
        </div>
      </section>

      {/* 4. Hardware & Setup */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>Experiment Setup & Data Logging</h2>
        <p>
          The experiment was conducted at the Virginia Tech drone park from <strong>18:30 on March 17, 2024 to 19:30 on March 18, 2024</strong>. The hardware configuration consisted of:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
          <li><strong>Base & Rover:</strong> Two Holybro H-RTK F9P multiband GNSS receivers utilizing the high-performance u-blox F9P module.</li>
          <li><strong>Telemetry & logging:</strong> A Raspberry Pi 4 logging raw receiver packets via a UART interface at a 38400 baud rate and sampling at 1Hz.</li>
        </ul>
        <p>
          Four primary UBX message packets were logged continuously for 25+ hours:
        </p>
        <ol className="list-decimal pl-6 space-y-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
          <li><code>RXM-RAWX</code>: Raw pseudorange, Doppler, carrier phase, and signal quality metrics.</li>
          <li><code>NAV-SAT</code>: Space Vehicle (SV) identifiers, carrier-to-noise ratios (C/N0), azimuth, and elevation coordinates.</li>
          <li><code>NAV-PVT</code>: Absolute 3D position coordinates, velocity vector, and clock solution.</li>
          <li><code>NAV-RELPOSNED</code>: Relative baseline vector components between base and rover, yielding millimeter-level baseline precision.</li>
        </ol>

        {/* Figure 3: Pi Connections */}
        <div className="my-8 text-center bg-gray-900/5 dark:bg-white/5 p-4 rounded-xl border border-gray-200/50 dark:border-gray-800/50">
          <img src={figPiConnections} alt="Block diagram of data collection setup" className="rounded-xl mx-auto max-h-[220px]" />
          <p className="text-xs mt-2" style={{ color: 'var(--text-secondary)' }}>
            Figure 3: Connections of a Raspberry Pi used to log raw data and pass RTCM corrections to rover (from Page 6).
          </p>
        </div>

      </section>

      {/* 5. Mathematical Models */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>Mathematical Models & Error Isolation</h2>
        <p>
          To isolate the multipath and receiver noise components, we construct the <strong>Iono-Free Code Minus Carrier (IFCMC)</strong> linear combinations.
        </p>
        <p>
          For L1 and L2 frequencies (<InlineMath math={String.raw`f_{L1} = 1575.42\text{ MHz}`} />, <InlineMath math={String.raw`f_{L2} = 1227.60\text{ MHz}`} />), the code phase pseudoranges (<InlineMath math={String.raw`\rho`} />) and carrier phase measurements (<InlineMath math={String.raw`\Phi`} />) are modeled as:
        </p>

        {/* Equations */}
        <div className="p-4 rounded-xl border space-y-4" style={{ backgroundColor: 'var(--surface-bg)', borderColor: 'var(--border-color)' }}>
          <div>
            <span className="text-xs font-semibold block uppercase tracking-wider mb-2" style={{ color: 'var(--text-secondary)' }}>Code Phase Pseudorange</span>
            <BlockMath math={String.raw`\rho_{L_j} = r_i + c\delta t_u - c\delta^s t + I_j + T + \varepsilon_{\rho, j} \quad (j = 1, 2)`} />
          </div>
          <div>
            <span className="text-xs font-semibold block uppercase tracking-wider mb-2" style={{ color: 'var(--text-secondary)' }}>Carrier Phase Cycles</span>
            <BlockMath math={String.raw`\lambda_j \Phi_{L_j} = r_i + c\delta t_u - c\delta^s t - I_j + T + \lambda_j N_j + \varepsilon_{\Phi, j} \quad (j = 1, 2)`} />
          </div>
        </div>

        <p className="text-sm">
          Where <InlineMath math="r_i" /> is the geometric distance to satellite, <InlineMath math="\delta t_u" /> is receiver clock bias, <InlineMath math="\delta^s t" /> is satellite clock bias, <InlineMath math="I" /> is ionospheric delay, <InlineMath math="T" /> is tropospheric delay, <InlineMath math="N" /> is the integer cycle ambiguity, and <InlineMath math="\varepsilon" /> represents combined receiver noise and multipath.
        </p>

        <h3 className="text-lg font-bold mt-6" style={{ color: 'var(--text-primary)' }}>Ionosphere-Free Ranging Combinations</h3>
        <p>
          Because the ionosphere is dispersive, we eliminate the ionospheric delay $I$ by combining the frequencies:
        </p>
        <div className="p-4 rounded-xl border text-center" style={{ backgroundColor: 'var(--surface-bg)', borderColor: 'var(--border-color)' }}>
          <BlockMath math={String.raw`\rho_{IF} = C_1 \rho_{L1} - C_2 \rho_{L2} \quad \text{and} \quad \Phi_{IF} = C_1 \lambda_{L1} \Phi_{L1} - C_2 \lambda_{L2} \Phi_{L2}`} />
          <div className="mt-2 text-xs text-left" style={{ color: 'var(--text-secondary)' }}>
            Coefficients: <InlineMath math={String.raw`C_1 = \frac{f_{L1}^2}{f_{L1}^2 - f_{L2}^2} \approx 2.546`} /> and <InlineMath math={String.raw`C_2 = \frac{f_{L2}^2}{f_{L1}^2 - f_{L2}^2} \approx 1.546`} />
          </div>
        </div>

        {/* Figure 6: Raw measurements plot */}
        <div className="my-8 text-center bg-gray-900/5 dark:bg-white/5 p-4 rounded-xl border border-gray-200/50 dark:border-gray-800/50">
          <img src={figMeasurements} alt="Elevation and pseudorange measurements" className="rounded-xl mx-auto max-h-[300px]" />
          <p className="text-xs mt-2" style={{ color: 'var(--text-secondary)' }}>
            Figure 6: Carrier and code phase measurements along with satellite elevations (from Page 10).
          </p>
        </div>

        <p>
          Subtracting the Ionosphere-Free Carrier Phase from the Code Phase yields the Code-Minus-Carrier Combination:
        </p>
        <div className="p-4 rounded-xl border text-center" style={{ backgroundColor: 'var(--surface-bg)', borderColor: 'var(--border-color)' }}>
          <BlockMath math={String.raw`\text{IFCMC} = \rho_{IF} - \Phi_{IF} = \varepsilon_{\rho, IF} - \varepsilon_{\Phi, IF} - (C_1 \lambda_{L1} N_1 - C_2 \lambda_{L2} N_2)`} />
        </div>
        <p className="text-sm">
          Assuming cycle lock is maintained, the ambiguities <InlineMath math="N_1" /> and <InlineMath math="N_2" /> remain constant and are removed by subtracting the mean of the continuous span. We are left with only receiver noise and multipath error, scaled by <InlineMath math={String.raw`1/\sqrt{C_1^2 + C_2^2}`} /> to isolate the exact ranging error.
        </p>

        {/* Figure 7: Noise over time */}
        <div className="my-8 text-center bg-gray-900/5 dark:bg-white/5 p-4 rounded-xl border border-gray-200/50 dark:border-gray-800/50">
          <img src={figNoiseOverTime} alt="Receiver noise and multipath error vs time" className="rounded-xl mx-auto max-h-[220px]" />
          <p className="text-xs mt-2" style={{ color: 'var(--text-secondary)' }}>
            Figure 7: Isolated receiver noise and multipath error (mean removed) over time (from Page 11).
          </p>
        </div>
      </section>

      {/* 6. Results and Conclusion */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>Results & Spatial Mapping</h2>
        <p>
          Plotting the computed error values against the satellites' azimuth and elevation coordinates on a skyplot reveals a clear spatial correlation.
        </p>

        {/* Figure 8: Skyplot RNMP */}
        <div className="my-8 text-center bg-gray-900/5 dark:bg-white/5 p-4 rounded-xl border border-gray-200/50 dark:border-gray-800/50">
          <img src={figSkyplotRnmp} alt="Sky plot for GPS constellation RNMP" className="rounded-xl mx-auto max-h-[280px]" />
          <p className="text-xs mt-2" style={{ color: 'var(--text-secondary)' }}>
            Figure 8: Sky plot for GPS constellation RNMP at Drone Park (from Page 11).
          </p>
        </div>

        <p>
          High-magnitude multipath errors (up to 15 meters) occur along specific radial spokes. When projecting the exact coordinates of the vertical steel fence poles surrounding the drone park onto the skyplot, they match the high-error sectors.
        </p>
        <p>
          This confirms that satellite signals traversing the wire netting and bouncing off the supporting columns generate significant reflected signal paths, which introduces code-phase multipath ranging errors in ground-level receivers.
        </p>

        {/* Figure 9: Skyplot CNO */}
        <div className="my-8 text-center bg-gray-900/5 dark:bg-white/5 p-4 rounded-xl border border-gray-200/50 dark:border-gray-800/50">
          <img src={figSkyplotCno} alt="Drone Park CNO skyplot" className="rounded-xl mx-auto max-h-[280px]" />
          <p className="text-xs mt-2" style={{ color: 'var(--text-secondary)' }}>
            Figure 9: Drone Park carrier-to-noise ratio (C/N0) skyplot (from Page 12).
          </p>
        </div>

        {/* Figure 10: 3D Poles model */}
        <div className="my-8 text-center bg-gray-900/5 dark:bg-white/5 p-4 rounded-xl border border-gray-200/50 dark:border-gray-800/50">
          <img src={figPolesModel} alt="Representation of the poles present at the drone park" className="rounded-xl mx-auto max-h-[240px]" />
          <p className="text-xs mt-2" style={{ color: 'var(--text-secondary)' }}>
            Figure 10: 3D modeling/representation of the mesh support poles at the drone park (from Page 13).
          </p>
        </div>
        
        <h3 className="text-lg font-bold mt-6" style={{ color: 'var(--text-primary)' }}>Conclusion</h3>
        <p>
          This case study successfully demonstrated the quantification and spatial mapping of local GNSS multipath errors using raw data analysis. For high-safety autonomous aerial operations close to ground structures, correcting or filtering satellite signals that cross known reflectors (such as support poles) is crucial to maintaining reliable centimeter-level positioning.
        </p>
      </section>
    </>
  );
};

const GNSSMultipathAnalysis = () => {
  const techStack = [
    'GNSS/RTK',
    'Matlab',
    'Sensing & Perception',
    'Error Modeling',
    'Data Analytics'
  ];

  return (
    <ProjectLayout
      title="GNSS Multipath Error Analysis for an RTK GPS System"
      subtitle="Quantifying and locating structural sources of receiver noise and multipath error at the Virginia Tech drone park using carrier-phase differential GPS."
      techStack={techStack}
      // image={coverImage}
      githubLink="https://github.com/rutvikd1"
    >
      <GNSSMultipathAnalysisContent />
    </ProjectLayout>
  );
};

export default GNSSMultipathAnalysis;
