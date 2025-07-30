- name: 🚀 Deploy to Azure Server
  run: |
    ssh -o StrictHostKeyChecking=no hostapp@13.91.104.221 << 'EOF'
      set -ex  # <-- show each command and exit on error

      echo "🧹 Removing existing project directory"
      rm -rf ~/simple-todo-app

      echo "⬇️ Cloning fresh repo"
      git clone https://github.com/Rajapaksha99/simple-todo-app.git ~/simple-todo-app

      echo "📂 List simple-todo-app directory contents"
      ls -lah ~/simple-todo-app

      cd ~/simple-todo-app

      echo "📦 Installing backend dependencies"
      cd backend
      npm install

      echo "🔁 Restarting backend with PM2"
      pm2 restart backend || pm2 start Server.js --name backend

      echo "🧱 Building frontend"
      cd ../frontend
      npm install
      npm run build

      echo "🌍 Deploying frontend build to Nginx"
      sudo rm -rf /var/www/html/*
      sudo cp -r build/* /var/www/html/

      echo "🌍 List /var/www/html contents after copy"
      ls -lah /var/www/html

      echo "✅ Deployment complete!"
    EOF
