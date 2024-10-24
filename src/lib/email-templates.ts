interface User {
    email: string;
    name?: string;
  }
  
  export function getWelcomeEmailContent(user: User) {
    return {
      subject: 'Welcome to Our Platform',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            </style>
          </head>
          <body>
            <div class="container">
              <h1>Welcome${user.name ? ` ${user.name}` : ''}!</h1>
              <p>Thank you for joining our platform. We're excited to have you here!</p>
            </div>
          </body>
        </html>
      `,
      text: `Welcome${user.name ? ` ${user.name}` : ''}! Thank you for joining our platform.`
    };
  }