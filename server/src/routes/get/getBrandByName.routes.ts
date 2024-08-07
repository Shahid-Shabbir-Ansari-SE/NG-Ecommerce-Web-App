import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'

const prisma = new PrismaClient()

export async function getBrandByName(req: Request, res: Response) {
  const { brandName } = req.query

  try {
    if (!brandName) {
      return res.status(400).json({ message: 'brandName is required' })
    }

    // Fetch the brand by id
    const brand = await prisma.brand.findUnique({
      where: {
        brandName: brandName.toString()
      }
    })

    if (!brand) {
      return res.status(404).json({ message: 'Brand not found' })
    }

    return res.status(200).json(brand)
  } catch (error) {
    console.error('Error in getBrand:', error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}