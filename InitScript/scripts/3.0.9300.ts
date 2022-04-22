import { find, update } from '../util/db';
import getSlug from '../util/getSlug';
const schedulesCollection: string = 'schedules';

async function run(): void {
    const schedules: $TSFixMe = await find(schedulesCollection, {
        $or: [
            { slug: { $exists: false } },
            { slug: { $regex: /[&*+~.,\\/()|'"!:@]+/g } },
        ],
    });
    for (let i: $TSFixMe = 0; i < schedules.length; i++) {
        const { name }: $TSFixMe = schedules[i];
        schedules[i].slug = getSlug(name);
        await update(
            schedulesCollection,
            { _id: schedules[i]._id },
            { slug: schedules[i].slug }
        );
    }
    return `Script ran for ${schedules.length} schedules.`;
}
export default run;