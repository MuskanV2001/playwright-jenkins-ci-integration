# playwright-jenkins-ci-integration
Playwright test automation suite that runs on SauceLabs, integrated with Jenkins CI so that whenever any changes are pushed to the Dev branch, Jenkins job gets triggered. 

## Steps to Setup Playwright suite: 
1. Created Playwright test automation suite framework on local
2. Initialized git repository on local
3. Added remote origin - https://github.com/MuskanV2001/playwright-jenkins-ci-integration.git to the local repo
4. Pulled changes (README.md file) from remote origin main to local main
5. Committed and pushed changes to remote origin main 

## Steps to setup Jenkins Jobs
1. Create a new Job on Jenkins
2. Update the Configuration Details


## Steps to integrate with sauce labs