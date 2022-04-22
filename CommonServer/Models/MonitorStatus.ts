import mongoose, {
    RequiredFields,
    UniqueFields,
    EncryptedFields,
    Schema,
} from '../Infrastructure/ORM';

const schema: Schema = new Schema({
    monitorId: { type: String, ref: 'Monitor', index: true }, //Which monitor does this belong to.
    probeId: { type: String, ref: 'Probe', index: true }, //Which probe does this belong to.
    incidentId: { type: String, ref: 'Incident', index: true },
    status: String,
    manuallyCreated: {
        type: Boolean,
        default: false,
    },
    startTime: {
        type: Date,
        default: Date.now,
    },
    endTime: {
        type: Date,
        default: null,
    },
    lastStatus: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
    deleted: { type: Boolean, default: false },
    deletedAt: { type: Date },
    deletedById: { type: String, ref: 'User', index: true },
});

export const requiredFields: RequiredFields = schema.requiredPaths();

export const uniqueFields: UniqueFields = [];
export const encryptedFields: EncryptedFields = [];

export const slugifyField: string = '';

export default mongoose.model('MonitorStatus', schema);