import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function testSchema() {
  try {
    console.log('🚀 Starting schema test...')

    // Test 1: Create a user
    const user = await prisma.user.create({
      data: {
        email: 'test@example.com',
        name: 'Test User',
        hashedPassword: 'dummy-hashed-password',
      }
    })
    console.log('✅ Created user:', user)

    // Test 2: Create a website for the user
    const website = await prisma.website.create({
      data: {
        subdomain: 'test-site',
        title: 'Test Website',
        userId: user.id
      }
    })
    console.log('✅ Created website:', website)

    // Test 3: Create a document
    const document = await prisma.document.create({
      data: {
        title: 'Test Document',
        content: 'This is a test document content',
        slug: 'test-document',
        userId: user.id
      }
    })
    console.log('✅ Created document:', document)

    // Test 4: Query user with relations
    const userWithRelations = await prisma.user.findUnique({
      where: { id: user.id },
      include: {
        website: true,
        documents: true
      }
    })
    console.log('✅ Retrieved user with relations:', userWithRelations)

  } catch (error) {
    console.error('❌ Test failed:', error)
  } finally {
    // Clean up - Delete all test data
    try {
      await prisma.document.deleteMany()
      await prisma.website.deleteMany()
      await prisma.user.deleteMany()
      console.log('🧹 Cleaned up test data')
    } catch (cleanupError) {
      console.error('❌ Cleanup failed:', cleanupError)
    }
    await prisma.$disconnect()
  }
}

// Run the tests
console.log('🏃 Running schema tests...')
testSchema()
  .catch(console.error)
  .finally(() => console.log('✨ Tests completed'))