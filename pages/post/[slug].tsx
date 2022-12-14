import { GetServerSideProps } from "next";
import Head from "next/head";
import { Categories, PostWidget } from "../../components";
import AuthorCard from "../../components/AuthorCard";
import Comments from "../../components/Comments";
import CommentsForm from "../../components/CommentsForm";
import PostDetail from "../../components/PostDetail";
import { IPost, IPostDetails } from "../../interface";
import { getPostDetails } from "../../services";

const PostDetails = ({ post }: { post: IPostDetails }) => {
  return (
    <div className="container mx-auto md:px-10 px-3 mb-8">
        <Head>
        <title>{post.title}</title>
      </Head>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8 ">
          <PostDetail post={post} />
          <AuthorCard author={post.author} />
          <CommentsForm slug = {post.slug}/>
          <Comments slug = {post.slug} />
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8 lg:w-4/5 lg:ml-6">
            <PostWidget
              slug={post.slug}
              categories={post.categories.map((category) => category.slug)}
            />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;

export const getServerSideProps: GetServerSideProps<
  { post: IPost },
  { slug: string }
> = async (context) => {
  const post = await getPostDetails(context.params?.slug as string)
  return {
    props: {
        post
    },
  };
};
