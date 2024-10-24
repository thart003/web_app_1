import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function testMediaSchema() {
  try {
    console.log('🚀 Starting media schema test...')

    // Create a test user
    const user = await prisma.user.create({
      data: {
        email: 'mediatest@example.com',
        name: 'Media Test User',
        hashedPassword: 'dummy-hashed-password',
      }
    })
    console.log('✅ Created user')

    // Create a test media entry for header
    const headerImage = await prisma.media.create({
      data: {
        fileName: 'test-header.jpg',
        s3Key: 'uploads/test-header-123.jpg',
        s3Url: 'https://your-bucket.s3.amazonaws.com/uploads/test-header-123.jpg',
        mimeType: 'image/jpeg',
        size: 1024 * 1024, // 1MB
        width: 1920,
        height: 1080,
        user: {
          connect: { id: user.id }
        }
      }
    })
    console.log('✅ Created header image:', headerImage)

    // Create another media entry for attachment
    const attachedImage = await prisma.media.create({
      data: {
        fileName: 'test-attachment.jpg',
        s3Key: 'uploads/test-attachment-123.jpg',
        s3Url: 'https://your-bucket.s3.amazonaws.com/uploads/test-attachment-123.jpg',
        mimeType: 'image/jpeg',
        size: 512 * 1024, // 512KB
        width: 800,
        height: 600,
        user: {
          connect: { id: user.id }
        }
      }
    })
    console.log('✅ Created attached image:', attachedImage)

    // Create a document with both header and attached images
    const document = await prisma.document.create({
      data: {
        title: 'Post with Images',
        content: 'This is a test post with both header and attached images',
        slug: 'post-with-images',
        tags: [],
        isPublished: false,
        user: {
          connect: { id: user.id }
        },
        headerImage: {
          connect: { id: headerImage.id }
        },
        attachedMedia: {
          connect: [{ id: attachedImage.id }]
        }
      },
      include: {
        headerImage: true,
        attachedMedia: true
      }
    })
    console.log('✅ Created document with images:', document)

    // Update the media records to connect them to the document
    await prisma.media.update({
      where: { id: attachedImage.id },
      data: {
        attachedToDocuments: {
          connect: [{ id: document.id }]
        }
      }
    })

    // Query document with all relations
    const documentWithRelations = await prisma.document.findUnique({
      where: { id: document.id },
      include: {
        headerImage: true,
        attachedMedia: true,
        user: true
      }
    })
    console.log('✅ Retrieved document with relations:', documentWithRelations)

  } catch (error) {
    console.error('❌ Test failed:', error)
  } finally {
    // Clean up test data
    try {
      await prisma.document.deleteMany()
      await prisma.media.deleteMany()
      await prisma.user.deleteMany()
      console.log('🧹 Cleaned up test data')
    } catch (cleanupError) {
      console.error('❌ Cleanup failed:', cleanupError)
    }
    await prisma.$disconnect()
  }
}

// Run the tests
console.log('🏃 Running media schema tests...')
testMediaSchema()
  .catch(console.error)
  .finally(() => console.log('✨ Tests completed'))