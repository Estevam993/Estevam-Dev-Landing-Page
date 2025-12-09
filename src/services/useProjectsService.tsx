import {
  IconAlertCircle,
  IconAppWindowFilled,
  IconBrandGithub,
  IconBrandSpotify,
  IconLayoutDashboard,
  IconUserFilled,
  IconWorldWww
} from "@tabler/icons-react";
import {JSX} from "react";

type ProjectsType = {
  icon: JSX.Element;
  title: string;
  value: string;
  color?: string;
}

type VideosProjectType = {
  src: string
  description: string
  url: {
    url: string
    label: string
    icon: JSX.Element
  }[]
  value: string
  color: string
}

const projects: ProjectsType[] = [
  {
    icon: <IconAppWindowFilled/>,
    title: 'Landing Page',
    value: 'landing_page',
    color: 'blue'
  },
  {
    icon: <IconUserFilled/>,
    title: 'Admin Page',
    value: 'admin_page',
    color: 'pink'
  },
  {
    icon: <IconAlertCircle/>,
    title: 'Front End Challenge',
    value: 'front_end_challenge',
    color: 'red'
  },
  {
    icon: <IconBrandSpotify/>,
    title: 'Album Rating',
    value: 'album_rating',
    color: 'green'
  },
  {
    icon: <IconLayoutDashboard/>,
    title: 'Gdash Challenge',
    value: 'gdash_challenge',
    color: 'purple'
  },
  // {
  //   icon: <IconFileInfoFilled/>,
  //   title: "Sigmatos",
  //   value: "sigmatos"
  // }
]

const videos: VideosProjectType[] = [
  {
    src: "/videos/modelo_landing_page.mp4",
    description: "Meu primeiro projeto de estudo sozinho, fiz ele em 2023 utilizando apenas HTML, CSS com Bootstrap e JavaScript.",
    url: [
      {
        url: 'https://github.com/Estevam993/modelo_landing_page',
        label: 'modelo_landing_page',
        icon: <IconBrandGithub/>
      }
    ],
    value: 'landing_page',
    color: 'red'
  },
  {
    src: "/videos/admin_page.mp4",
    description: "Meu segundo projeto, porém agora bem mais avançado com back end em NestJs com autenticação JWT e banco de dados Postgrees e front-end com NextJs com Mui e Axios.",
    url: [
      {
        url: 'https://github.com/Estevam993/admin_page_back',
        label: 'admin_page_back',
        icon: <IconBrandGithub/>
      },
      {
        url: 'https://github.com/Estevam993/admin_page_front',
        label: 'admin_page_front',
        icon: <IconBrandGithub/>
      }
    ],
    value: 'admin_page',
    color: 'pink'
  },
  {
    src: "/videos/front_end_challenge.mp4",
    description: "Esse site foi um desafio que fiz para um processo seletivo. Fiz em NextJs e consumi a API da marvel para pesquisar e exibir os heróis. Para favoritar utilizei local storage.",
    url: [
      {
        url: 'https://frontend-challange-p2zmfeg4u-estevam993s-projects.vercel.app',
        label: 'Challenge',
        icon: <IconWorldWww/>
      }, {
        url: 'https://github.com/Estevam993/frontend-challange',
        label: 'frontend-challange',
        icon: <IconBrandGithub/>
      },
    ],
    value: 'front_end_challenge',
    color: 'green'
  },
  {
    src: "/videos/album_rating.mp4",
    description: "Aplicação back-end em C# com integração ao Spotify, permitindo pesquisa de álbuns e criação de avaliações personalizadas.",
    url: [{
      url: 'https://github.com/Estevam993/AlbumRating',
      label: 'album-rating',
      icon: <IconBrandGithub/>
    },
    ],
    value: 'album_rating',
    color: 'yellow'
  },
  {
    src: "/videos/gdash_challenge.mp4",
    description: "aaaaaa.",
    url: [{
      url: 'https://github.com/Estevam993/desafio-gdash/tree/joao-vitor-estevam-raimundo',
      label: 'gdash_challenge',
      icon: <IconBrandGithub/>
    },
    ],
    value: 'gdash_challenge',
    color: 'pink'
  }
]

export default function useProjectsService() {

  return {
    projects,
    videos
  }
}