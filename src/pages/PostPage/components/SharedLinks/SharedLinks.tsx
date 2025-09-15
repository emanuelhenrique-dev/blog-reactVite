import { useEffect, useRef } from 'react';
import twitterLogo from '/twitter.svg';
import facebookLogo from '/facebook.svg';
import instagramLogo from '/instagram.svg';
import whatsappLogo from '/whatsapp.svg';
import linkedinLogo from '/linkedin.svg';
import { SharedLinksContainer } from './SharedLinks.style';
import SVGInject from '@iconfu/svg-inject';
import { SVGImage } from '../../../../components/SVGImage/SVGImage';

function openShareWindow(url: string) {
  // Define a largura e altura da nova janela
  const width = 600;
  const height = 400;

  // Calcula a posição esquerda (left) e superior (top) para centralizar a janela
  // Usa as dimensões da janela atual do navegador
  const left = (window.innerWidth - width) / 2;
  const top = (window.innerHeight - height) / 2;

  // Abre a janela com as novas posições
  window.open(
    url,
    'share-window',
    `width=${width},height=${height},left=${left},top=${top},menubar=no,toolbar=no,status=no`
  );
}

export function SharedLinks({
  postUrl,
  title
}: {
  postUrl: string;
  title: string;
}) {
  const encodedUrl = encodeURIComponent(postUrl);
  const encodedTitle = encodeURIComponent(title);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (imgRef.current) {
      SVGInject(imgRef.current);
    }
  }, []);

  const socials = [
    {
      name: 'Twitter',
      logo: twitterLogo,
      url: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`
    },
    {
      name: 'Facebook',
      logo: facebookLogo,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`
    },
    {
      name: 'LinkedIn',
      logo: linkedinLogo,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`
    },
    {
      name: 'WhatsApp',
      logo: whatsappLogo,
      url: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`
    },

    {
      name: 'Instagram',
      logo: instagramLogo,
      url: `https://www.instagram.com/?url=${encodedUrl}` // Instagram não tem share direto
    }
  ];

  return (
    <SharedLinksContainer>
      <span>Gostou? Compartilhe a página!!!</span>
      <div className="social-medias" role="list">
        {socials.map((social) => (
          <div
            key={social.name}
            className={`share-btn_${social.name.toLowerCase()}`}
            aria-label={`Compartilhar no ${social.name}`}
            role="button"
            onClick={() => openShareWindow(social.url)}
          >
            <SVGImage src={social.logo} alt={social.name} />
          </div>
        ))}
      </div>
    </SharedLinksContainer>
  );
}
