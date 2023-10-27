import { NextRequest, NextResponse } from 'next/server';
import { getRequestUrl } from '@/pages/utils/server-utils';
import { getWixClient } from '@/pages/hooks/useWixClientServer';

export const config = {
  runtime: 'edge',
}

export default async function handler(
  request: NextRequest,
  context: {
    params: { productId: string }
  }
) {
  console.log(context.params.productId)
  const requestUrl = getRequestUrl(request)
  const baseUrl = new URL('/', requestUrl).toString()
  const { searchParams } = new URL(requestUrl)
  const quantity = parseInt(searchParams.get('quantity') || '1', 10)
  const productOptions = JSON.parse(
    searchParams.get('productOptions') || 'null'
  )
  
  const wixClient = await getWixClient()

  const { product } = await wixClient.products.getProduct(context.params.productId)

  if (!product) {
    return NextResponse.json({ message: 'Product not found' }, { status: 404 })
  }

  // Rest of logic

  return NextResponse.redirect(redirectSession!.fullUrl!)
}