export interface TOurFamily {
  our_family_title: string;
  our_family_subtitle: string;
  our_family_photos: [
    {
      our_family_about_dog: {
        html: any;
      };
      our_family_dog_image: any;
      our_family_dog_name: string;
    },
  ];
}

export interface TGalleryPhoto {
  gallery_image_alt_text: string;
  gallery_image: any;
}

export interface TGallery {
  gallery_subtitle: string;
  gallery_title: string;
  gallery_photos: [TGalleryPhoto];
}

export interface TIntro {
  blurb1_heading: string;
  blurb1_text: {
    html: any;
  };
  blurb2_heading: string;
  blurb3_heading: string;
  blurb3_text: {
    html: any;
  };
  blurb2_text: {
    html: any;
  };
  intro_body: string;
  intro_heading: string;
  intro_title: string;
  blurb1_image: any;
  blurb2_image: any;
  blurb3_image: any;
  intro_image: any;
}

export interface THero {
  coverImage: any;
  cta: {
    cta_link: string;
    cta_text: string;
  };
  description: string;
  subtitle: string;
  tagline: string;
  title: string;
}

export interface TFrontmatter {
  hero: THero;
  intro: TIntro;
  gallery: TGallery;
}

export interface TMarkdownRemark {
  frontmatter: TFrontmatter;
}

export interface TIndexQueryResult {
  markdownRemark: TMarkdownRemark;
}
