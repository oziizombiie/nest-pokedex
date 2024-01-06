import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
//eqwivale a una tabla
//Si no agregamos el decorador Schema, moongose jamas detecta los campos
@Schema()
export class Pokemon extends Document {
  @Prop({
    unique: true,
    index: true,
  })
  name: string;

  @Prop({
    unique: true,
    index: true,
  })
  no: number;
}
//toma la estructura y reglas de negocio dictadas en prop
export const PokemonSchema = SchemaFactory.createForClass(Pokemon);
