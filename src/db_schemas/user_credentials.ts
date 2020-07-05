import { prop, Ref, getModelForClass, index } from '@typegoose/typegoose';
import { user } from './user';

@index({ username: 1 }, { collation: { locale: 'en', strength: 2 } })
export class user_credentials {
    @prop({ required: true })
    public first_name?: string;

    @prop({ required: true })
    last_name?: string;

    @prop({ required: true, unique: true })
    username?: string;

    @prop({ required: true })
    password?: string;

    @prop({ required: true, ref: user })
    user?: Ref<user>;

    @prop({ default: new Date() })
    date_of_creation?: Date;

    @prop({ default: new Date() })
    last_updated?: Date;
}

export const user_credential_model = getModelForClass(user_credentials);
