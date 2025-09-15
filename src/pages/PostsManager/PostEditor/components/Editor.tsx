import { useEffect, useRef } from 'react';
import EditorJS from '@editorjs/editorjs';
import type { OutputData } from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Quote from '@editorjs/quote';
import ImageTool from '@editorjs/image';
import { EditorContainer } from './Editor.style';

interface EditorProps {
  data?: OutputData; // dados iniciais do post
  onChange?: (data: OutputData) => void; // callback quando o conteúdo mudar
}

export function Editor({ data, onChange }: EditorProps) {
  const editorRef = useRef<EditorJS | null>(null);

  useEffect(() => {
    if (!editorRef.current) {
      editorRef.current = new EditorJS({
        holder: 'editorjs',
        tools: {
          header: Header,
          list: List,
          quote: Quote,
          image: {
            class: ImageTool,
            config: {
              caption: true,
              types: 'image/*',
              withBackground: false,
              uploader: {
                uploadByFile: async (file: File) => ({
                  success: 1,
                  file: { url: URL.createObjectURL(file) }
                }),
                uploadByUrl: async (url: string) => ({
                  success: 1,
                  file: { url } // aqui não faz fetch nem valida
                })
              }
            }
          }
        },
        data: data,
        onChange: async () => {
          const savedData = await editorRef.current?.save();
          if (savedData && onChange) {
            onChange(savedData);
          }
        }
      });
    }

    return () => {
      if (editorRef.current?.destroy) {
        editorRef.current.destroy();
        editorRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <EditorContainer id="editorjs" />;
}
