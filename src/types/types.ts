export interface Member {
  name: string;
  batch: string;
  role: string;
  image: string;
}



export interface FilterTag {
  column: string;
  condition?: string;
  value: any;
}

export type Row = {
  original: any;
};

export interface FilterTag {
  column: string;
  condition?: string;
  value: any;
}

export interface FilterTagProps {
  tag: FilterTag;
  onRemove: (filter: FilterTag) => void;
}

export interface FilterInputProps {
  columns: string[];
  onFilterAdd: (filter: FilterTag) => void;
}


export type GlobalFilterFn = (
  row: Row,           
  columnId: string,
  filterValue: string
) => boolean;

export interface GalleryImage {
  id: string;
  url: string;
  title: string;
  createdAt?: string;
}

export interface GalleryFolder {
  id: string;
  name: string;
  images: GalleryImage[];
  createdAt?: string;
  description?: string;
}

export interface GalleryData {
  folders: GalleryFolder[];
}