# Base image
FROM node:18-alpine

# Mendefinisikan build argument
ARG NEXT_PUBLIC_BACKEND_API_BASEURL
ARG NEXT_PUBLIC_URL_PARAM_ENCRYPT_KEY
ARG NEXT_PUBLIC_URL_ENCRYPT_KEY
ARG NEXT_PUBLIC_GRECAPTCHA_SITE_KEY
ARG GRECAPTCHA_SECRET_KEY
ARG BACKEND_API_BASEURL
ARG FRONTEND_URL
ARG NEXTAUTH_URL
ARG NEXT_PUBLIC_NEXTAUTH_URL

# Mengatur environment variables
ENV NEXT_PUBLIC_BACKEND_API_BASEURL=$NEXT_PUBLIC_BACKEND_API_BASEURL
ENV NEXT_PUBLIC_URL_PARAM_ENCRYPT_KEY=$NEXT_PUBLIC_URL_PARAM_ENCRYPT_KEY
ENV NEXT_PUBLIC_URL_ENCRYPT_KEY=$NEXT_PUBLIC_URL_ENCRYPT_KEY
ENV BACKEND_API_BASEURL=$BACKEND_API_BASEURL
ENV NEXT_PUBLIC_GRECAPTCHA_SITE_KEY=$NEXT_PUBLIC_GRECAPTCHA_SITE_KEY
ENV GRECAPTCHA_SECRET_KEY=$GRECAPTCHA_SECRET_KEY
ENV FRONTEND_URL=$FRONTEND_URL
ENV NEXTAUTH_URL=$NEXTAUTH_URL
ENV NEXT_PUBLIC_NEXTAUTH_URL=$NEXT_PUBLIC_NEXTAUTH_URL

# Debug environment variables sebelum build
RUN echo "NEXT_PUBLIC_BACKEND_API_BASEURL=$NEXT_PUBLIC_BACKEND_API_BASEURL"
RUN echo "NEXT_PUBLIC_URL_PARAM_ENCRYPT_KEY=$NEXT_PUBLIC_URL_PARAM_ENCRYPT_KEY"
RUN echo "NEXT_PUBLIC_URL_ENCRYPT_KEY=$NEXT_PUBLIC_URL_ENCRYPT_KEY"
RUN echo "BACKEND_API_BASEURL=$BACKEND_API_BASEURL"
RUN echo "NEXT_PUBLIC_GRECAPTCHA_SITE_KEY=$NEXT_PUBLIC_GRECAPTCHA_SITE_KEY"
RUN echo "GRECAPTCHA_SECRET_KEY=$GRECAPTCHA_SECRET_KEY"
RUN echo "FRONTEND_URL=$FRONTEND_URL"
RUN echo "NEXTAUTH_URL=$NEXTAUTH_URL"
RUN echo "NEXT_PUBLIC_NEXTAUTH_URL=$NEXT_PUBLIC_NEXTAUTH_URL"

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Build the project
RUN npm run build

# Expose port
# EXPOSE 3000

# Start the app
CMD ["npm", "start"]
