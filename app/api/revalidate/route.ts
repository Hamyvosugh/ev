// app/api/revalidate/route.ts
import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

// این کلید امنیتی باید در متغیرهای محیطی تنظیم شود
// شما می‌توانید یک کلید تصادفی ایجاد کنید
// مثلا با استفاده از: openssl rand -base64 32
const REVALIDATE_SECRET = process.env.REVALIDATE_SECRET || 'your-secret-key';

export async function POST(request: NextRequest) {
  try {
    const requestBody = await request.json();
    const { path, secret } = requestBody;

    // بررسی کلید امنیتی
    if (secret !== REVALIDATE_SECRET) {
      return NextResponse.json(
        { 
          revalidated: false, 
          message: 'Invalid secret' 
        },
        { status: 401 }
      );
    }

    if (!path) {
      return NextResponse.json(
        { 
          revalidated: false, 
          message: 'Path is required' 
        },
        { status: 400 }
      );
    }

    // بازسازی مسیر مشخص شده
    revalidatePath(path);

    return NextResponse.json({ 
      revalidated: true, 
      message: `Path ${path} revalidated successfully` 
    });
  } catch (error) {
    console.error('Error during revalidation:', error);
    return NextResponse.json(
      { 
        revalidated: false, 
        message: 'Error revalidating', 
        error: (error as Error).message 
      },
      { status: 500 }
    );
  }
}