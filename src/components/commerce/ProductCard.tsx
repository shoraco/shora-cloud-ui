import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Button } from '../core/Button';

export interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  currency?: string;
  imageUrl?: string;
  description?: string;
  onAddToCart?: () => void;
}

const Card = styled(motion.div)`
  border-radius: 12px;
  overflow: hidden;
  background: white;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 75%;
  overflow: hidden;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Content = styled.div`
  padding: 16px;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: var(--shora-text, #1f2937);
`;

const Price = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: var(--shora-primary, #2563eb);
  margin: 8px 0;
`;

const Description = styled.p`
  margin: 8px 0;
  color: var(--shora-text-secondary, #6b7280);
  font-size: 14px;
  line-height: 1.5;
`;

export const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  currency = 'USD',
  imageUrl,
  description,
  onAddToCart,
}) => {
  return (
    <Card
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {imageUrl && (
        <ImageContainer>
          <img src={imageUrl} alt={title} loading="lazy" />
        </ImageContainer>
      )}
      <Content>
        <Title>{title}</Title>
        <Price>
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency,
          }).format(price)}
        </Price>
        {description && <Description>{description}</Description>}
        <Button
          variant="primary"
          size="medium"
          onClick={onAddToCart}
          style={{ width: '100%', marginTop: '12px' }}
        >
          Add to Cart
        </Button>
      </Content>
    </Card>
  );
};
