// PM2 Ecosystem Configuration
// /var/www/moskva-plitka/ecosystem.config.js

module.exports = {
    apps: [
        {
            name: "moskva-plitka-frontend",
            script: "npm",
            args: "start",
            cwd: "/var/www/moskva-plitka",
            instances: "max",
            exec_mode: "cluster",
            env: {
                NODE_ENV: "production",
                PORT: 3000,
            },
            env_production: {
                NODE_ENV: "production",
                PORT: 3000,
            },
            // Restart on memory limit
            max_memory_restart: "500M",
            // Logging
            log_date_format: "YYYY-MM-DD HH:mm:ss",
            error_file: "/var/log/pm2/moskva-plitka-frontend-error.log",
            out_file: "/var/log/pm2/moskva-plitka-frontend-out.log",
            merge_logs: true,
            // Restart settings
            watch: false,
            autorestart: true,
            max_restarts: 10,
            min_uptime: "10s",
        },
        {
            name: "moskva-plitka-backend",
            script: "dist/index.js",
            cwd: "/var/www/moskva-plitka/backend",
            instances: 2,
            exec_mode: "cluster",
            env: {
                NODE_ENV: "production",
                PORT: 5000,
            },
            env_production: {
                NODE_ENV: "production",
                PORT: 5000,
            },
            // Restart on memory limit
            max_memory_restart: "300M",
            // Logging
            log_date_format: "YYYY-MM-DD HH:mm:ss",
            error_file: "/var/log/pm2/moskva-plitka-backend-error.log",
            out_file: "/var/log/pm2/moskva-plitka-backend-out.log",
            merge_logs: true,
            // Restart settings
            watch: false,
            autorestart: true,
            max_restarts: 10,
            min_uptime: "10s",
        },
    ],

    // Deployment configuration (optional)
    deploy: {
        production: {
            user: "deploy",
            host: "your-server.com",
            ref: "origin/main",
            repo: "git@github.com:your-username/moskva-plitka.git",
            path: "/var/www/moskva-plitka",
            "pre-deploy-local": "",
            "post-deploy":
                "npm install && npm run build && cd backend && npm install && npm run build && cd .. && pm2 reload ecosystem.config.js --env production",
            "pre-setup": "",
        },
    },
};
