pipeline {
    tools { nodejs 'WebAppNodeJS' }
    agent { label 'Jenkins-Agent'}
    stages {
        stage('Checkout') {
            steps {
                checkout([$class: 'GitSCM',
                branches: [[name: "main"]],
                doGenerateSubmoduleConfigurations: false,
                extensions: [],
                gitTool: 'Default',
                submoduleCfg: [],
                userRemoteConfigs: [[url: 'https://github.com/tijko/WebApp.git']]
               ])
            }
        }
        stage('Cloning Source') {
            steps {
                sh 'echo GIT sourcing'
                git branch:'main', url:'https://github.com/tijko/WebApp.git'
            }
        }
        stage('Install') {
            steps {
                sh 'echo Install'
                sh 'pwd'
                sh 'ls -ls'
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'echo Build'
                sh 'ng build'
            }
        }
        stage('Test') {
            steps {
                sh 'echo Test'
                sh 'ng test'
            }
        }
    }

}
