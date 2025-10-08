# Test Label-to-QR API

## New API Endpoint: POST /api/scan/create-qr

### Requirements:
- **Authentication**: None required (public access)
- **Content-Type**: application/json

### Request Body:
```json
{
  "label": "product_label_name"
}
```

### Response:
```json
{
  "message": "QR code created successfully",
  "qr_url": "https://res.cloudinary.com/.../qr_code_url",
  "id_qr": "64f8a1b2c3d4e5f6a7b8c9d0",
  "product_label": "product_label_name"
}
```

### Example Usage:

#### Create QR from Label (No Authentication Required)
```bash
curl -X POST http://localhost:3001/api/scan/create-qr \
  -H "Content-Type: application/json" \
  -d '{"label":"plastic_bottle"}'
```

### Error Cases:
- **404 Not Found**: Product with label not found
- **400 Bad Request**: Invalid request body

### Features:
- ✅ Creates QR code for existing products
- ✅ Generates unique QR ID
- ✅ Stores in database with active status
- ✅ Returns QR URL for user scanning
- ✅ Public access (no authentication required)
