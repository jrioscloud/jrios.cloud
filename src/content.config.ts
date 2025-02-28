import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

const caseStudies = defineCollection({
	loader: glob({ base: './src/content/case-studies', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		// New fields for enhanced case study information
		challenges: z.array(z.string()).optional(),
		keyFeatures: z.array(z.string()).optional(),
		result: z.string().optional(),
		industry: z.string().optional(),
		client: z.string().optional(),
		duration: z.string().optional(),
		impactMetric: z.string().optional(),
	}),
});

const serviceOfferings = defineCollection({
	loader: glob({ base: './src/content/services', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		// New fields for enhanced service information
		serviceType: z.enum(['standard', 'emergency', 'package']).optional(),
		pricing: z.string().optional(),
		packageValue: z.number().optional(),
		implementationPricing: z.string().optional(),
		minimumHours: z.number().optional(),
		availabilityLimit: z.string().optional(),
		availabilityDate: z.string().optional(),
		availableSlots: z.number().optional(),
		features: z.array(z.string()).optional(),
		ctaText: z.string().optional(),
		ctaLink: z.string().optional(),
		productType: z.string().optional(),
	}),
});

export const collections = { blog, caseStudies, serviceOfferings };
