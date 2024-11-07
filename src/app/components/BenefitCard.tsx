"use client"
interface BenefitCardProps {
    title: string; 
    description: string;
  }

const BenefitCard = ({title, description}: BenefitCardProps) => {
  return (
    <div className="border border-gray-200 rounded p-4 space-y-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p>{description}</p>
    </div>
  )
}

export default BenefitCard