
# CrowdRiff Story Network Gallery React
![npm](https://img.shields.io/npm/v/crowdriff-story-network-gallery-react) ![npm bundle size](https://img.shields.io/bundlephobia/min/crowdriff-story-network-gallery-react)
A lightweight component that allows CrowdRiff customers to embed Story Network galleries on websites built using React.

## Getting Started

These instructions will demonstrate how to install the library and implement CrowdRiff story galleries on React websites.

### Required Peer Dependancies
- react: ^16.8.0,
- react-dom: ^16.8.0


### Installation

Using [npm](https://www.npmjs.com/):

```
npm install crowdriff-story-network-gallery-react
```

## Usage

To embed one (or many) galleries, import the `CrowdriffStoryGallery` component, and pass the galleryId as a prop.

```
import  React  from  'react';
import  CrowdriffStoryGallery  from  'crowdriff-story-network-gallery-react'
export  const  Home  =  ()  =>  {

return  (
	<div>
		<CrowdriffStoryGallery  galleryId="1234-5678"  />
		<CrowdriffStoryGallery  galleryId="8765-4321"  />
	</div>
	);
}
```