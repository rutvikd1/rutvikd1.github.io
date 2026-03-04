import React from 'react';

const TreeDetectionProject = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 text-gray-800">
      
      {/* Header Section */}
      <header className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Fallen Tree Detection via Drone Orthomosaics
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
          An automated deep learning pipeline designed to process high-resolution drone imagery, utilizing semantic segmentation to identify and map fallen trees in complex terrain.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {['Python', 'DeepLabV3+', 'OpenCV', 'Data Tiling', 'Semantic Segmentation'].map(tech => (
            <span key={tech} className="bg-emerald-50 text-emerald-700 px-4 py-1.5 rounded-full text-sm font-semibold border border-emerald-200">
              {tech}
            </span>
          ))}
        </div>
      </header>

      {/* Hero Image */}
      <div className="w-full bg-gray-200 rounded-xl overflow-hidden shadow-lg mb-16 aspect-video flex items-center justify-center">
        <p className="text-gray-500 font-medium">
          
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        
        {/* Main Content Column */}
        <div className="md:col-span-2 space-y-12">
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">The Dataset Challenge</h2>
            <p className="leading-relaxed mb-4">
              Raw drone orthomosaics are massive, often exceeding gigabytes in size and tens of thousands of pixels in resolution. Feeding these directly into a neural network is computationally impossible. 
            </p>
            <p className="leading-relaxed">
              To solve this, I developed a robust preprocessing pipeline focusing on <strong>data tiling</strong>. The orthomosaics were systematically sliced into overlapping patches suitable for model ingestion, ensuring that context at the edges of patches was preserved to avoid fragmented detections.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">Model Architecture: DeepLabV3+</h2>
            <p className="leading-relaxed mb-6">
              For the segmentation task, I selected DeepLabV3+. Its spatial pyramid pooling module is highly effective at capturing contextual information at multiple scales, which is crucial for identifying fallen trees that vary drastically in size and orientation.
            </p>
            <div className="bg-gray-100 p-8 rounded-lg border border-gray-200 text-center">
               <p className="text-gray-500 font-medium">
                 
               </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">Annotation Strategy</h2>
            <p className="leading-relaxed mb-4">
              High-quality ground truth data is the bottleneck of any supervised learning task. The dataset required meticulous pixel-level annotation to distinguish fallen trunks from standing trees, shadows, and low-lying vegetation.
            </p>
          </section>

        </div>

        {/* Sidebar / Quick Stats */}
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Project Highlights</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2">✓</span>
                Custom data tiling algorithm for gigapixel images
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2">✓</span>
                Pixel-perfect annotation workflow
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2">✓</span>
                Multi-scale feature extraction using spatial pyramid pooling
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-2">GitHub Repository</h3>
            <p className="text-sm text-gray-600 mb-4">View the source code, preprocessing scripts, and model weights.</p>
            <button className="w-full bg-gray-900 text-white font-semibold py-2 rounded-lg hover:bg-gray-800 transition-colors">
              View Code
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TreeDetectionProject;