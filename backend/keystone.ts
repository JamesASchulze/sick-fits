import { createAuth } from '@keystone-next/auth';
import { User } from './schemas/User';
import { config, createSchema } from '@keystone-next/keystone/schema';
import 'dotenv/config';
import { withItemData, statelessSessions } from '@keystone-next/keystone/session';
import { Product } from './schemas/Product';
import { ProductImage } from './schemas/ProductImage';

const databaseURL = process.env.DATABASE_URL || 'mongodb://localhost/keystone-sick-fits-tutorial';

const sessionConfig = {
    maxAge: 60 * 60 * 24 * 360,
    secret: process.env.COOKIE_SECRET,
};

const { withAuth } = createAuth({
    listKey: 'User',
    identityField: 'email',
    secretField: 'password',
    initFirstItem: {
        fields: ['name', 'email', 'password'],
        // TODO: Add in initial roles here.
    }
})


export default withAuth(
    config({
        server: {
            cors: {
                origin: [process.env.FRONTEND_URL],
                credentials: true,
            }
        },
        db: {
            adapter: 'mongoose',
            url: databaseURL,
            // TODO: add data seeding here
        },
        lists: createSchema({
            // Schema items go in here
            User,
            Product,
            ProductImage,
        }),
        ui: {
            // Show the UI for people who pass this test.
            isAccessAllowed: ({ session }) => {
                console.log(session);
                return !!session?.data;
            },
        },
        session: withItemData(statelessSessions(sessionConfig), {
            User: `id`
        })
    })
);