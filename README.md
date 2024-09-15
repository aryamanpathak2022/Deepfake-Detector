# Video Tampering Detection with Transformers and Blockchain

## Overview

This project implements a deep learning-based model for detecting video tampering, particularly deepfakes. The model is designed to extract spatio-temporal patterns from video frames using random masking and transformer layers. It reconstructs masked frames and detects anomalies through error analysis. Tampered videos are securely stored on a blockchain, providing traceability and tamper-proof records.

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

