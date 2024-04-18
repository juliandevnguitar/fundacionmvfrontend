
export interface statistic {
    id: number,
    value: string,
    type: string,
    title: string,
    subtitle: string,
    imgUrl: string
}

export interface Profile {
    id: number,
    attributes: {
      Name: string,
      Degree: string,
      Description: string,
      createdAt: string,
      updatedAt: string,
      publishedAt: string,
      mentorId: string,
      Picture: Picture
      School: string
    }
  }

export interface Picture {
    data: {
        id: number,
        attributes: {
          name: string | null,
          alternativeText: string | null,
          caption: string | null,
          width: number,
          height: number,
          formats: [Object],
          hash: string | null,
          ext: string | null,
          mime: string | null,
          size: number,
          url: string | null,
          previewUrl: string | null,
          provider: string | null,
          provider_metadata: string | null,
          createdAt: string | null,
          updatedAt: string | null
        }
      }
}
