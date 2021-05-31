


# Development Notes
The following instructions will demonstrate how to locally develop and make changes to the `CrowdRiff Story Network Gallery React` NPM package.

## How The Package Works
The following is the basic folder structure for the package. The development code is located in the src/index.jsx, and this is the file that all code changes should be made in.  The build script in the package.json uses babel to transpile the file in the src to the lib file as part of the npm publish action.
```
├── src/
│   ├── index.jsx
├── lib/
│   ├── index.js
├── .babelrc
└── package.json
```
## Developing Locally
### Cloning and Running
- Clone the repository locally
	```
	git clone https://github.com/crowdriff/crowdriff-story-network-gallery-react.git
	```
- **Optional** - In the event you need to make changes to the [Story-Gallery-Web](https://github.com/twitsprout/story-gallery-web) at the same time, you can update the `baseScriptUrl` located in `/src/index.jsx` to be `http://localhost:3001/v2/js`
- Navigate to the repo folder, and in a terminal:
	- execute `npm install` - installs NPM dependancy
	- execute `npm build-dev` - This command updates the lib folder with the transpiled code. This will need to be run every time the code changes in order to keep the lib folder up to date.

### Testing Locally
> You don't necessarily _need_ to create a full react app to test this out, you can also follow the directions to locally install the package in an existing repo and it should work.
#### Using Create React App
- Create a new create-react-app. In the `package.json`, update the versions for `react` and `react-dom` to be 16.8.0, as that is the supported peer dependancy of this package. Delete the node modules and package JSON so the next npm install will install the correct versions
#### Locally Install the package
- Install the repository `crowdriff-story-network-gallery-react` as a dependancy by running the following command
```
npm install ${Path to the crowdriff-story-network-gallery-react repo root}
```
#### Using the component
Follow the usage instructions in the main [Readme](https://github.com/crowdriff/crowdriff-story-network-gallery-react/blob/main/README.md)