# node-js-pipeline

Simple server application with continuous pipeline deployment configured.

Pushing anything to the git repo will kick off a job within travis which if successful will deploy the build onto a hosted server via https://zeit.co/dashboard

Uses Node, Express, Git, Travis CI, Now.sh, Zeit