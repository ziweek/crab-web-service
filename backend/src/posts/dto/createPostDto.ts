export class CreatePostDto {
  title: string;
  content: string;
  images: string;

  region: JSON;
  hidden: boolean;
}
