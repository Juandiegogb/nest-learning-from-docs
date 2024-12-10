pipeline {
    agent any
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
                sh '''
                docker build -t my-app:latest .
                docker stop my-app || true
                docker rm my-app || true
                docker run -d --name my-app -p 3000:3000 my-app:latest
                '''
            }
        }

    }
}
