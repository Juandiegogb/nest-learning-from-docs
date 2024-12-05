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
        stage('Build') {
            steps {
                echo 'Building the application...'
                sh 'pnpm run build'
            }
        }
        stage('Test') {
            steps {
                echo 'Running tests...'
                sh 'pnpm test'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying the application...'
                sh 'npm run start' // Ajusta este comando según tu estrategia de despliegue
            }
        }
    }
}
