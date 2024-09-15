# Video Tampering Detection with Transformers and Blockchain

## Overview

This project implements a deep learning-based model for detecting video tampering, particularly deepfakes. The model is designed to extract spatio-temporal patterns from video frames using random masking and transformer layers. It reconstructs masked frames and detects anomalies through error analysis. Tampered videos are securely stored on a blockchain, providing traceability and tamper-proof records.

## Key Features

- **Random Masking & Patch Embedding**: 
    - Extract and normalize frames to ensure consistent input data for the model.
    - Apply random masking to patches within frames, forcing the model to learn contextual information by reconstructing missing parts.
  
- **Temporal & Spatial Encoding**: 
    - Use transformer layers (encoder) to encode relationships within and across frames, enabling the model to capture complex video patterns.

- **Frame Reconstruction & Error Analysis**: 
    - Reconstruct masked frames using transformer layers (decoder).
    - Compute errors by comparing reconstructed frames with the original frames to detect potential tampering.

- **Feature Aggregation & Classification**: 
    - Aggregate learned features from the entire video into a vector.
    - Pass the feature vector through fully connected layers (FCC) to classify the video as real or a deepfake.

- **Anomaly Detection & Heatmaps**: 
    - Generate heatmaps to visualize and analyze tampered regions in the video.
    - Analyze patterns across frames to generate a detailed report of tampered features.

- **Blockchain Deployment**: 
    - Flagged videos are securely stored in a blockchain node, ensuring tamper-proof, immutable records.
    - Provides traceability and decentralized verification for enhanced security and integrity.

## Project Structure


## Web Interface

Below are screenshots of the web interface that allows users to interact with the model:

### Home Page
![image](https://github.com/user-attachments/assets/24ab787d-ee27-48ef-8f5b-a2d4f459f9c2)

### Upload Video Page
![image](https://github.com/user-attachments/assets/fe91ef93-3bdc-4442-85ad-feb055b15fc7)

### Detection Result Page
![image](https://github.com/user-attachments/assets/e4055f20-632d-4b7b-a5af-33c11e16bff5)


## Getting Started

### Prerequisites

To set up this project, you'll need the following installed on your machine:

- Python 3.8+
- PyTorch
- NumPy
- OpenCV
- Transformers (Hugging Face)
- Matplotlib (for heatmaps)
- Blockchain SDK (specific to your blockchain solution)

