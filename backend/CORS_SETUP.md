# CORS Configuration for Backend

## Environment Variable Setup

The backend supports multiple frontend origins through the `CORS_ORIGIN` environment variable.

### For Render Deployment

1. Go to your Render dashboard
2. Select your backend service
3. Go to **Environment** tab
4. Add/Update the `CORS_ORIGIN` variable:

#### Option 1: Single Frontend URL
```
CORS_ORIGIN=https://pharma-fe.vercel.app
```

#### Option 2: Multiple Frontend URLs (comma-separated)
```
CORS_ORIGIN=https://pharma-fe.vercel.app,http://localhost:5173
```

### Default Behavior

If `CORS_ORIGIN` is not set, the backend will allow:
- `http://localhost:5173` (local development)
- `https://pharma-fe.vercel.app` (Vercel frontend)

### Allowed Methods

- GET
- POST
- PUT
- DELETE
- OPTIONS (for preflight requests)

### Allowed Headers

- Content-Type
- Authorization

### Credentials

CORS is configured with `credentials: true` to allow cookies and authentication headers.

## Testing CORS

After setting the environment variable, restart your Render service. The CORS headers will be applied to all API responses.

## Troubleshooting

If you still see CORS errors:

1. **Check the exact frontend URL**: Make sure the URL in `CORS_ORIGIN` matches exactly (including `https://` and no trailing slash)
2. **Restart the service**: Render needs a restart to pick up new environment variables
3. **Check browser console**: Look for the exact error message
4. **Verify preflight**: OPTIONS requests should return 200 with proper CORS headers

## Example CORS Headers in Response

```
Access-Control-Allow-Origin: https://pharma-fe.vercel.app
Access-Control-Allow-Credentials: true
Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS
Access-Control-Allow-Headers: Content-Type, Authorization
```

