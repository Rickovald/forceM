import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  // await app.listen(5000);
// }
// bootstrap();


const bootstrap = async () => {
  try {
    const PORT = process.env.PORT || 5000
    const app = await NestFactory.create(AppModule);
    await app.listen(PORT, () => {console.log(`Server started at port ${PORT}`)});
  } catch (error) {
    console.log(error);
  }
}
bootstrap();