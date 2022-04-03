import {getModelForClass, modelOptions, prop} from '@typegoose/typegoose';

@modelOptions({
    schemaOptions: {
        timestamps: true,
        versionKey: true,
    }
})
class Product {
    @prop({type: String})
    name!: string;

    @prop({type: String})
    category!: String;

    @prop({type: Number})
    price!: number;

    @prop({type: String })
    imgURL!: string;
}
export const ProductModel = getModelForClass(Product);
