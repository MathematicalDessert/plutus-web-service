import { prop, Ref, getModelForClass } from '@typegoose/typegoose';
import { user_credentials } from './user_credentials';

export class user {
    @prop({ required: true, ref: user_credentials })
    credentials?: Ref<user_credentials>;
}

export const user_model = getModelForClass(user);
