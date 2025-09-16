# Buddd Strapi + Astro Demo

A demo project showcasing the integration between **Strapi CMS** and **Astro** with automatic static page regeneration using webhooks.

## 🚀 Quick Start

### 1. Setup Backend (Strapi)

```bash
cd backend
cp .env.example .env  # Configure your environment variables
npm install
npm run dev
```

### 2. Setup Frontend (Astro)

```bash
cd client
cp .env.example .env  # Configure STRAPI_URL
npm install
npm run dev
```

## 🔧 Webhook Configuration for Incremental Regeneration

### Step 1: Create Deploy Hook in Vercel

1. Go to your project in [Vercel Dashboard](https://vercel.com/dashboard)
2. Navigate to **Settings → Git → Deploy Hooks**
3. Create a new hook:
   - **Name**: `Strapi Content Update`
   - **Branch**: `main`
4. **Copy the generated URL**

### Step 2: Configure Webhook in Strapi

1. In your Strapi admin, go to **Settings → Webhooks**
2. Create a new webhook:
   - **Name**: `Vercel Auto Deploy`
   - **URL**: Paste the Deploy Hook URL from Vercel
   - **Events**: Select all content events:
     - ✅ `entry.create`
     - ✅ `entry.update` 
     - ✅ `entry.delete`
     - ✅ `entry.publish`
     - ✅ `entry.unpublish`

### Step 3: Test

1. Make a change in Strapi
2. Check Vercel for automatic deployment
3. Site regenerates in ~2-3 minutes

## 📊 How It Works

When you change content in Strapi → Webhook triggers Vercel → New static build → Updated site

**Benefits**: Fast static pages + automatic updates without manual deploys.
