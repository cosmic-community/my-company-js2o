export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

export type ServiceWing = 'Legal Tech' | 'Digital Estate' | 'Tax Strategy' | 'Family Law' | 'Global';

export interface Service extends CosmicObject {
  type: 'services';
  metadata: {
    service_title?: string;
    wing?: string;
    short_description?: string;
    full_description?: string;
    icon_emoji?: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    key_features?: string[] | string;
    cta_text?: string;
    display_order?: number;
  };
}

export interface TeamMember extends CosmicObject {
  type: 'team-members';
  metadata: {
    full_name?: string;
    role?: string;
    credentials?: string;
    bio?: string;
    portrait?: {
      url: string;
      imgix_url: string;
    };
    specializations?: string[] | string;
    linkedin_url?: string;
    email?: string;
    display_order?: number;
  };
}

export interface CaseStudy extends CosmicObject {
  type: 'case-studies';
  metadata: {
    case_title?: string;
    client?: string;
    industry?: string;
    challenge?: string;
    solution?: string;
    results?: string;
    related_service?: Service;
    cover_image?: {
      url: string;
      imgix_url: string;
    };
    completion_date?: string;
  };
}

export interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    client_name?: string;
    client_role?: string;
    quote?: string;
    client_photo?: {
      url: string;
      imgix_url: string;
    };
    rating?: number;
    related_service?: Service;
    featured?: boolean;
  };
}

export function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}