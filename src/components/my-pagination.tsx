'use client'

import { FC } from 'react'
import { useRouter, useSearchParams } from 'next/navigation';

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { AlignHorizontalDistributeCenterIcon, ChevronRight } from "lucide-react"
import { ChevronLeft } from "lucide-react"
import { Button } from './ui/button';
import { dirxml } from 'console';


interface PaginationControlsProps {
  hasNextPage: boolean,
  hasPrevPage: boolean,
}

const PaginationControls: FC<PaginationControlsProps> = (
  {
    hasNextPage,
    hasPrevPage,
  }
) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const page = searchParams.get('page') ?? '1'
  const perPage = searchParams.get('perPage') ?? '10'

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <Button variant="outline" size="icon"
            disabled={!hasPrevPage}
            onClick={() => {
              router.push(`tickets/?page=${Number(page) - 1}&perPage=${perPage}`)
            }}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
        </PaginationItem>
        <PaginationItem>
          {page} 
          {/* / {Math.ceil(10 / Number(perPage))} */}
        </PaginationItem>
        <PaginationItem>
          <Button variant="outline" size="icon"
            disabled={!hasNextPage}
            onClick={() => {
              router.push(`tickets/?page=${Number(page) + 1}&per_page=${perPage}`)
            }}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>)
}

export default PaginationControls
