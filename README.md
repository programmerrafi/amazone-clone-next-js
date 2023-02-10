# Amazon Clone

![Template Screenshot](TemplateScreenshot.png?raw=true "Template Screenshot")

## Live demo

### [Live Demo](https://amazon-clone-nextjs-4.netlify.app)

## Installation Steps

### Using npm

Run commands

1. `npm install`

2. `npm run dev`

### Or using yarn

Run commands

1. `npm install --global yarn`

2. `yarn install`

3. `yarn run dev`

## Environment variables

Open or create a `.env` file then edit add this setting

```
# Firebase
FIREBASE_API_KEY=key_goes_here
FIREBASE_AUTH_DOMAIN=key_goes_here
FIREBASE_PROJECT_ID=key_goes_here
FIREBASE_STORAGE_BUCKET=key_goes_here
FIREBASE_MESSAGING_SENDER_ID=key_goes_here
FIREBASE_APP_ID=key_goes_here

# Authentication
GOOGLE_ID=key_goes_here
GOOGLE_SECRET=key_goes_here
NEXTAUTH_URL=http://localhost:3000

# Stripe
STRIPE_PUBLIC_KEY=key_goes_here
STRIPE_SECRET_KEY=key_goes_here

# Stripe Terminal/CLI
STRIPE_SIGNING_SECRET=key_goes_here

HOST=http://localhost:3000

# Need to add this to... google cloud
# http://localhost:3000/api/auth/callback/google
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
