pipeline {
    agent {
        label 'node'
    }
    stages {
        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                sh 'pnpm install'
            }
        }
        stage('Test') {
            steps {
                echo 'Running tests...'
                sh 'pnpm test'
            }
        }
        stage('Build') {
            steps {
                echo 'Building the application...'
                sh 'pnpm run build'
            }
        }
        
        stage('Deploy') {
            steps {
                echo 'Deploying the application...'
            }
        }
    }
}
