# 使用 Node.js 14.x 作为基础镜像
FROM node:14-alpine

# 设置工作目录
WORKDIR /app/src

# 将 package.json 和 package-lock.json 复制到工作目录中
COPY package*.json ./

# 安装依赖
RUN npm install

# 将所有文件复制到工作目录中
COPY . .

# 构建应用程序
RUN npm run build

# 暴露 80 端口
EXPOSE 80

# 启动应用程序
CMD ["npm", "run", "serve"]
