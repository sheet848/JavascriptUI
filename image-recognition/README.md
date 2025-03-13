# Building an Image Recognition App using TensorflowJS

## Introduction

Image recognition applications have become increasingly popular, leveraging the power of machine learning to identify and categorize objects within images. In this article, we’ll explore the process of building an image recognition app in React. We’ll use a pre-trained image recognition model to make the development process more easy.

## Prerequisites
- Node.js and npm
- Vite + React setup
- Install Tensorflow.js : 
    ```
    npm install @tensorflow/tfjs @tensorflow-models/coco-ssd

    ```

## Explanation of Image Recognition Library Usage
**@tensorflow/tfjs:**

TensorFlow.js is an open-source library for machine learning in JavaScript. It allows us to run pre-trained models directly in the browser.

**@tensorflow-models/coco-ssd:**

COCO-SSD is a pre-trained object detection model that can identify and locate objects in images.

**ImageRecognition Component:**

Uses TensorFlow.js and COCO-SSD for image recognition.
Utilizes React state and refs to manage the selected image and predictions.

`The `handleImageUpload` function is triggered when a user uploads an image. It loads the image, runs predictions using COCO-SSD, and updates the state with the results.`

## Loading state

The loading state is introduced to track whether the ML model is currently processing an image.

The setLoading(true) is called at the beginning of the model loading section to indicate the start of image recognition.

The setLoading(false) is placed later to ensure that it gets executed when the image recognition succeeds.

The UI is updated to conditionally render either the loading message or the image predictions based on the value of the loading state.
