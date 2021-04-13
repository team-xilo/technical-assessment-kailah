# XILO Technical Assessment

Thank you for your interest in XILO! In order to get a sense of your technical abilities, we would like you to complete this technical assessment. Please read the guidelines and setup instructions, then choose a use case to implement.

## Guidelines

Our goal in this assessment is to evaluate your technical abilities in as close to a "real world" context as possible. We want you to approach this assessment as if the features you implement will be used in production. This means we expect you to do the following:

- Make use of any resources available to you. Feel free to use Google, Stack Overflow, documentation websites, etc. If you would use it on the job, you can use it here.
- Communicate with your team if you have questions or need clarification. We are happy to answer any questions you may have - the email we send you with the link to this assessment will contain the contact information of team members you may reach out to with questions.
- Use the right tools for the job. If there is a third-party library or framework that you would like to use, you may do so, but be prepared to potentially explain what it does and why you chose to use it.
- Code with quality in mind. We are looking for code that is not just functional, but is also easy to understand and maintain. The code should take into account validation and error handling, and have at least a few unit tests covering the main use cases.

## Setup instructions

1. Clone the repository to your local development environment
2. Create a new branch for your work.
3. Run `npm install` to install dependencies
4. To serve the frontend app, run `npm run start-frontend`. To serve the backend api, run `npm run start-backend`
5. To submit your completed assessment, create a pull request into the `main` branch.

## Overview

You will be adding functionality to an online storage application, similar to Google Drive or Dropbox. Users of this application can upload files to be stored and organize their files in folders. Choose one of the following use cases to implement for the application:

## Frontend Use Case - Display Filesystem

You will be implementing a feature that allows a user to view their files and folders in a web browser. Add functionality to the `ViewFilesComponent` to display the filesystem for a user.

### Main Objective

Implement the following design:

![xilo-tech-interview-objective-1](https://user-images.githubusercontent.com/12035748/114325335-2c8c7680-9af5-11eb-8588-2825a69b51a9.png)

Requirements:

- For each level of the filesystem, folders should be displayed before files
- For each level of the filesystem, the list of folders and the list of files should each be alphabetized
- The contents of each folder should initially be hidden. Clicking on the arrow should show the contents of the folder. Clicking on the arrow again should hide the contents of the folder
- The arrow icon for a folder should change based on whether the contents of the folder are shown or hidden
- Load data from the `getUserData` method on `AppService`

### Optional Objectives

- Show different icons for each file extension - .txt, .pdf, and .jpg
- Add the ability to search/filter the fileroom based on keywords
- Add the ability to add or remove folders and files. You do not have to worry about persisting these changes to the backend

## Backend Use Case - Health Check

Unfortunately, the uploading functionality in the application has a lot of bugs, so users' filesystems often get corrupted. You will be implementing a feature that scans a user's filesystem to determine if there are any corrupted files or folders. Corrupted files and folders are represented in the test data by an optional property `corrupted` that is set to true for a corrupted file or folder, and is set to false or is not present for uncorrupted files and folders.

### Main Objective

Create a new controller called `HealthCheckController` in the api app. Add the following endpoints to the controller:

| Action | Path                                   | Parameters                                               | Description                                                                                                                                                                                                                                                                            |
| ------ | -------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GET    | `/health-check/is-corrupted`           | `userId`: a number corresponding to the id of a user     | Loads the user's data from `user-data.ts` and returns `true` if any of the files or folders in the user's filesystem are corrupted, and `false` if there are no corrupted files or folders.                                                                                            |
| POST   | `health-check/is-corrupted`            | `filesystem`: an object representing a user's filesystem | Scans the filesystem provided in the payload and returns `true` if any of the files or folders in the user's filesystem are corrupted, and `false` if there are no corrupted files or folders.                                                                                         |
| GET    | `/health-check/corrupted-files`        | `userId`: a number corresponding to the id of a user     | Loads the user's data from `user-data.ts` and returns a flattened list of all corrupted files and folders.                                                                                                                                                                             |
| GET    | `/health-check/uncorrupted-filesystem` | `userId`: a number corresponding to the id of a user     | Loads the user's data from `user-data.ts` and returns a filtered version of the filesystem consisting only of the uncorrupted files and folders. If a folder is corrupted, it is not included in the filtered filesystem, even if it contains files or folders that are not corrupted. |

To help verify your work, the `angular-app` frontend contains a UI for calling the endpoints and inspecting the responses.

### Optional Objectives

- Extend the `health-check/uncorrupted-filesystem` endpoint to accept an additonal optional parameter `strict`, a boolean denoting whether to operate in strict mode. If strict is true, the endpoint behaves as described in the main objective. If `strict` is false, then corrupted folders are included in the filtered filesystem, but only if they contain uncorrupted files or folders, and only the uncorrupted content of the folder is included in the filtered filesystem.
- Add the following new endpoint:

| Action | Path                          | Parameters                                                                                            | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------ | ----------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| POST   | `/health-check/fix-corrupted` | `userId`: a number corresponding to the id of a user <br/> `items`: a flat array of files and folders | For each of the provided files and folders, call the `reupload` method on `app.service.ts`. The value of the resolved promise represents the newly uploaded item. An error from the `reupload` method indicates that the item failed to upload and did not replace the corrupted item. After all items have been reuploaded, determine whether there are any remaining corrupted files or folders for the indicated user. Return `true` if there are no more corrupted items, and `false` if there are corrupted items. |
