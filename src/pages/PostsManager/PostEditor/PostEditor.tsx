import { v4 as uuid } from 'uuid';

//forms
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

//assets
import { formatNewDate } from '../../../util/FormatNewDate';
import { CalendarDotsIcon } from '@phosphor-icons/react';

//components
import { Post } from '../../../components/Post/Post';
import { PageHeader } from '../components/PageHeader/PageHeader';

//types
import type { Post as PostType } from '../../../reducers/posts/reducer';
import type { OutputData } from '@editorjs/editorjs';

// contexts
import { usePosts } from '../../../contexts/PostsContext';

//rrd imports
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { Editor } from './components/Editor';

// styles
import {
  FormHeader,
  PostEditorContainer,
  PostEditorContent,
  PostEditorForm,
  PostEditorPreview,
  TagInput
} from './PostEditor.style';
import { useState } from 'react';

// ----------------- SCHEMA -----------------
const postSchema = z.object({
  title: z.string().min(3, 'Título muito curto'),
  subtitle: z.string().min(3, 'Subtítulo muito curto'),
  tag: z.enum(['Tecnologia', 'Design', 'Ti Concursos', 'Programação']),
  contentJSON: z.custom<OutputData>()
});

type PostInput = z.infer<typeof postSchema>;

export function PostEditor({ mode }: { mode: 'new' | 'edit' }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(true);
  const { user } = useLoaderData() as {
    user: { name: string; avatarImg: string };
  };
  const { posts, addPost, updatePost } = usePosts();
  const post = posts.find((post) => post.id === id);

  console.log(user.name);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
    watch
  } = useForm<PostInput>({
    resolver: zodResolver(postSchema),
    defaultValues:
      mode === 'edit' && post
        ? {
            title: post.title,
            subtitle: post.subtitle,
            tag: post.tag,
            contentJSON: post.contentJSON
          }
        : {
            title: '',
            subtitle: '',
            tag: 'Tecnologia',
            contentJSON: {}
          }
  });

  const values = watch();

  //post temp para preview
  const postPreview: PostType = {
    id: 'preview',
    author: mode == 'edit' && post ? post.author : user.name,
    authorAvatar: mode == 'edit' && post ? post.authorAvatar : user.avatarImg,
    lastUpdateAuthor: 'Pré-visualização',
    dateCreated: mode == 'edit' && post ? post.dateCreated : formatNewDate(),
    dateUpdated: mode == 'edit' && post ? post.dateUpdated : formatNewDate(),
    ...values // ⚡ junta title, subtitle, tag, contentJSON vindos do form
  };

  // CREATE POST
  function handleCreatePost(data: PostInput) {
    const newPost: PostType = {
      id: uuid(),
      author: user ? user.name : 'desconhecido',
      authorAvatar: user ? user.avatarImg : '/avatarDefault.png',
      lastUpdateAuthor: user ? user.name : 'desconhecido',
      dateCreated: formatNewDate(),
      dateUpdated: formatNewDate(),
      ...data
    };

    addPost(newPost);

    navigate('/dashboard2490admin/posts-manager');
  }

  // UPDATE POST
  function handleUpdatePost(data: PostInput) {
    if (!post) {
      console.error('Não foi achado o post para atualizar');
      return;
    }

    const editedPost: PostType = {
      ...post,
      // id: post.id,
      // author: post.author,
      // authorAvatar: post.authorAvatar,
      lastUpdateAuthor: user ? user.name : 'desconhecido',
      // dateCreated: post.dateCreated,
      dateUpdated: formatNewDate(),
      ...data
    };
    updatePost(editedPost);
  }

  // render
  if (mode === 'edit' && !post) {
    return <p>Post não encontrado</p>;
  }

  // SUBMIT HANDLER
  const onSubmit = (data: PostInput) => {
    if (mode === 'new') {
      handleCreatePost(data);
      alert('Post Criado 🚧');
    } else {
      handleUpdatePost(data);
      alert('Post Atualizado 🚧');
    }
  };

  return (
    <PostEditorContainer>
      <PageHeader
        title="Edição do Post"
        onBack={() => navigate(-1)}
        action="Editando o post como"
        username={user.name}
        createdAt={post?.dateCreated}
        updatedAt={post?.dateUpdated}
        lastUpdateAuthor={post?.lastUpdateAuthor}
        primaryAction={{
          label: mode == 'edit' ? 'Salvar Mudança' : 'Criar Post',
          onClick: () => console.log('Post atualizado')
        }}
        type={'submit'}
        form={'postForm'}
      />
      <PostEditorContent>
        <div className="select-option" role="navigation">
          <h2
            role="menuitem"
            className={isEditing ? 'active' : ''}
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Editor do Post
          </h2>
          <h2
            role="menuitem"
            className={!isEditing ? 'active' : ''}
            onClick={() => {
              setIsEditing(false);
            }}
          >
            Pré-visualização
          </h2>
        </div>

        {isEditing ? (
          <PostEditorForm id="postForm" onSubmit={handleSubmit(onSubmit)}>
            <FormHeader>
              <div className="header-inputs">
                <TagInput $category={getValues().tag}>
                  <select {...register('tag')}>
                    <option value="Tecnologia">Tecnologia</option>
                    <option value="Design">Design</option>
                    <option value="Ti Concursos">Ti Concursos</option>
                  </select>
                </TagInput>

                <div className="title-input">
                  <textarea
                    placeholder="Título do Post"
                    {...register('title')}
                    onInput={(e) => {
                      const target = e.currentTarget;
                      target.style.height = 'auto';
                      target.style.height = target.scrollHeight + 'px';
                    }}
                  />
                  {errors.title && <span>{errors.title.message}</span>}
                </div>

                <div className="subtitle-input">
                  <textarea
                    placeholder="Subtítulo do Post"
                    {...register('subtitle')}
                    onInput={(e) => {
                      const target = e.currentTarget;
                      target.style.height = 'auto';
                      target.style.height = target.scrollHeight + 'px';
                    }}
                  />
                  {errors.subtitle && <span>{errors.subtitle.message}</span>}
                </div>
              </div>

              <div className="author-name">
                <img
                  src={postPreview.authorAvatar}
                  alt={
                    mode == 'edit' && post
                      ? `Avatar de ${post.author}`
                      : `Avatar de ${user.avatarImg}`
                  }
                  className="author-avatar"
                />
                <p>{postPreview.author}</p>
                <div className="divider"></div>
                <CalendarDotsIcon size={16} />
                <p>{postPreview.dateCreated}</p>
              </div>
            </FormHeader>

            {/* Editor controlado */}
            <Editor
              data={watch('contentJSON')} // preenche no modo edição
              onChange={(data) => setValue('contentJSON', data)} // integra com o form
            />
          </PostEditorForm>
        ) : (
          <PostEditorPreview>
            <Post post={postPreview} />
          </PostEditorPreview>
        )}
      </PostEditorContent>
    </PostEditorContainer>
  );
}
