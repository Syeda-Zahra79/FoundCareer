
type JobProvider = {
    jobProvider: string,
    url: string,
};

export type JobProps = {
    id: string,
    title: string,
    company:string,
    description: string,
    image?: string,
    location?: string,
    employmentType?: string,
    datePosted?: string,
    salaryRange?: string | number,
    jobProviders?: JobProvider[]
};