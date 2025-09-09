/* eslint-disable @typescript-eslint/no-explicit-any */
import type { JSX } from 'react';
import DOMPurify from 'dompurify';

export const renderBlock = (block: any, index: number) => {
  // helper de segurança para limpa o html
  const safeHTML = (html: string) => DOMPurify.sanitize(html || '');

  switch (block.type) {
    /////////////////////////// verificar Headers H1, H2, H3, H4, H5 e H6
    case 'header': {
      const HN = `h${block.data.level || 2}` as keyof JSX.IntrinsicElements;
      return (
        <HN
          key={index}
          dangerouslySetInnerHTML={{ __html: safeHTML(block.data?.text) }}
        />
      );
    }

    /////////////////////////// verificar <p>
    case 'paragraph':
      return (
        <p
          key={index}
          dangerouslySetInnerHTML={{ __html: safeHTML(block.data?.text) }}
        />
      );

    /////////////////////////// verificar Listas ordenadas e n ordenadas(verificar se usar numero, letra ou numero romano e por qual numero começar)
    case 'list': {
      if (!Array.isArray(block.data?.items)) return null;

      // Função recursiva p/ listas aninhadas
      const renderList = (
        items: any[],
        style: string = 'unordered',
        counterType: string = 'decimal',
        start: number = 1
      ) => {
        let listStyle: React.CSSProperties = {};

        if (style === 'ordered') {
          listStyle = { listStyleType: counterType || 'decimal' };
        } else {
          listStyle = { listStyleType: 'disc' };
        }

        const ListTag = style === 'ordered' ? 'ol' : 'ul';

        return (
          <ListTag
            style={listStyle}
            start={style === 'ordered' ? start : undefined}
          >
            {items.map((item, i) => (
              <li key={i}>
                <span dangerouslySetInnerHTML={{ __html: item.content }} />
                {item.items?.length > 0 &&
                  renderList(
                    item.items,
                    item.meta?.style || 'unordered',
                    item.meta?.counterType || 'decimal',
                    item.meta?.start || 1
                  )}
              </li>
            ))}
          </ListTag>
        );
      };

      return (
        <div key={index}>
          {renderList(
            block.data.items,
            block.data.style,
            block.data.meta?.counterType || 'decimal',
            block.data.meta?.start || 1
          )}
        </div>
      );
    }

    /////////////////////////// verificar quotes/citações
    case 'quote': {
      const text = block.data?.text || '';
      const caption = block.data?.caption?.trim() || '';

      return (
        <blockquote key={index}>
          {text && <span dangerouslySetInnerHTML={{ __html: text }} />}
          {caption && <footer>- {caption}</footer>}
        </blockquote>
      );
    }

    /////////////////////////// verificar images
    case 'image': {
      const { file, caption, withBorder, withBackground, stretched } =
        block.data;

      // estilos extras baseados nas flags
      const classNames = [
        withBorder ? 'image-border' : '',
        withBackground ? 'image-background' : '',
        stretched ? 'image-stretched' : ''
      ]
        .filter(Boolean)
        .join(' ');

      return (
        <figure key={index} className={classNames}>
          <img
            src={file?.url}
            alt={caption || ''}
            style={{
              maxWidth: stretched ? '100%' : '600px',
              width: '100%',
              border: withBorder ? '2px solid #ddd' : 'none',
              background: withBackground ? '#f7f7f7' : 'transparent'
            }}
          />
          {caption && caption.replace(/<br\s*\/?>/gi, '').trim() && (
            <figcaption style={{ fontSize: '0.9rem', color: '#666' }}>
              {caption.replace(/<br\s*\/?>/gi, '').trim()}
            </figcaption>
          )}
        </figure>
      );
    }

    default:
      return null;
  }
};
