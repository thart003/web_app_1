// tests/media-test.ts
import { db } from '../src/lib/prisma'

async function testMediaSchema() {
  try {
    console.log('🚀 Starting media schema test...')
    
    // Create a test user
    const user = await db.user.create({
      data: {
        email: 'mediatest@example.com',
        name: 'Media Test User',
        hashedPassword: 'dummy-hashed-password',
        subscriptionStatus: 'trial',
        subscriptionEndDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
      }
    })
    console.log('✅ Created user')

    // Create test media
    const headerImage = await db.media.create({
      data: {
        fileName: 'test-header.jpg',
        s3Key: 'test/header.jpg',
        s3Url: 'https://example.com/test/header.jpg',
        mimeType: 'image/jpeg',
        size: 1024,
        width: 800,
        height: 600,
        userId: user.id,
      }
    })
    console.log('✅ Created header image')

    // Create test document with header image
    const document = await db.document.create({
      data: {
        title: 'Test Document',
        content: 'Test content',
        slug: 'test-document',
        userId: user.id,
        headerImageId: headerImage.id,
        attachedMediaIds: [headerImage.id],
      }
    })
    console.log('✅ Created document')

    console.log('✅ All tests passed successfully')
  } catch (error) {
    console.error('❌ Test failed:', error)
    throw error // Re-throw to ensure the process exits with an error code
  } finally {
    // Clean up test data
    try {
      await db.document.deleteMany()
      await db.media.deleteMany()
      await db.user.deleteMany()
      console.log('🧹 Cleaned up test data')
    } catch (cleanupError) {
      console.error('❌ Cleanup failed:', cleanupError)
    }
    await db.$disconnect()
  }
}

// Run the tests
console.log('🏃 Running media schema tests...')
testMediaSchema()
  .catch((error) => {
    console.error('❌ Tests failed:', error)
    process.exit(1)
  })
  .finally(() => console.log('✨ Tests completed'))